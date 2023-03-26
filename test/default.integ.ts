/*
 * DEPLOY COMMANDS:
 * (if new lambdas are added) projen
 * npm run bundle && npm run integ:default:deploy
 */

import * as cdk from 'aws-cdk-lib';
import { aws_codebuild as codebuild, aws_ec2 as ec2, aws_ecs as ecs } from 'aws-cdk-lib';
import {
  Architecture,
  CodeBuildRunnerProvider,
  Ec2RunnerProvider,
  FargateRunnerProvider,
  GitHubRunners,
  LambdaRunnerProvider,
  Os,
  RunnerImageComponent,
} from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'github-runners-test');

const vpc = new ec2.Vpc(stack, 'Vpc', {
  subnetConfiguration: [
    // just public so we don't need to waste money on VPC endpoints or NAT gateway
    {
      name: 'Public',
      subnetType: ec2.SubnetType.PUBLIC,
    },
  ],
});
const cluster = new ecs.Cluster(
  stack,
  'cluster',
  {
    enableFargateCapacityProviders: true,
    vpc: vpc,
  },
);
const fargateX64Builder = FargateRunnerProvider.imageBuilder(stack, 'Fargate builder', {
  architecture: Architecture.X86_64,
});
fargateX64Builder.addComponent(RunnerImageComponent.extraCertificates('certs/certs.pem', 'local'));
const fargateArm64Builder = FargateRunnerProvider.imageBuilder(stack, 'Fargate builder arm', {
  architecture: Architecture.ARM64,
});
const lambdaImageBuilder = LambdaRunnerProvider.imageBuilder(stack, 'Lambda Image Builder x64', {
  architecture: Architecture.X86_64,
});
const windowsImageBuilder = FargateRunnerProvider.imageBuilder(stack, 'Windows Image Builder', {
  os: Os.WINDOWS,
  vpc,
  subnetSelection: { subnetType: ec2.SubnetType.PUBLIC },
});
windowsImageBuilder.addComponent(RunnerImageComponent.extraCertificates('certs/certs.pem', 'local'));
const amiX64Builder = Ec2RunnerProvider.imageBuilder(stack, 'AMI Linux Builder', {
  vpc,
});
new GitHubRunners(stack, 'runners', {
  providers: [
    new CodeBuildRunnerProvider(stack, 'CodeBuildx64', {
      label: 'codebuild-x64',
      imageBuilder: CodeBuildRunnerProvider.imageBuilder(stack, 'CodeBuild Image Builder'),
    }),
    new CodeBuildRunnerProvider(stack, 'CodeBuildARM', {
      labels: ['codebuild', 'linux', 'arm64'],
      computeType: codebuild.ComputeType.SMALL,
      imageBuilder: CodeBuildRunnerProvider.imageBuilder(stack, 'CodeBuild Image Builder arm', {
        architecture: Architecture.ARM64,
      }),
    }),
    new CodeBuildRunnerProvider(stack, 'CodeBuildWindows', {
      labels: ['codebuild', 'windows', 'x64'],
      computeType: codebuild.ComputeType.MEDIUM,
      imageBuilder: windowsImageBuilder,
    }),
    new LambdaRunnerProvider(stack, 'Lambda', {
      labels: ['lambda', 'x64'],
      imageBuilder: lambdaImageBuilder,
    }),
    new LambdaRunnerProvider(stack, 'LambdaARM', {
      labels: ['lambda', 'arm64'],
      imageBuilder: LambdaRunnerProvider.imageBuilder(stack, 'Lambda Image Builderz', {
        architecture: Architecture.ARM64,
      }),
    }),
    new FargateRunnerProvider(stack, 'Fargate', {
      labels: ['fargate', 'linux', 'x64'],
      cpu: 256,
      memoryLimitMiB: 512,
      imageBuilder: fargateX64Builder,
      cluster,
      vpc: cluster.vpc,
      assignPublicIp: true,
    }),
    new FargateRunnerProvider(stack, 'Fargate-x64-spot', {
      labels: ['fargate-spot', 'linux', 'x64'],
      spot: true,
      cpu: 256,
      memoryLimitMiB: 512,
      imageBuilder: fargateX64Builder,
      cluster,
      vpc: cluster.vpc,
      assignPublicIp: true,
    }),
    new FargateRunnerProvider(stack, 'Fargate-arm64', {
      labels: ['fargate', 'linux', 'arm64'],
      cpu: 256,
      memoryLimitMiB: 512,
      imageBuilder: fargateArm64Builder,
      cluster,
      vpc: cluster.vpc,
      assignPublicIp: true,
    }),
    new FargateRunnerProvider(stack, 'Fargate-arm64-spot', {
      labels: ['fargate-spot', 'linux', 'arm64'],
      // TODO never available -- spot: true,
      cpu: 256,
      memoryLimitMiB: 512,
      imageBuilder: fargateArm64Builder,
      cluster,
      vpc: cluster.vpc,
      assignPublicIp: true,
    }),
    new FargateRunnerProvider(stack, 'Fargate-Windows', {
      labels: ['fargate', 'windows', 'x64'],
      cpu: 1024,
      memoryLimitMiB: 2048,
      imageBuilder: windowsImageBuilder,
      cluster,
      vpc: cluster.vpc,
      assignPublicIp: true,
    }),
    new Ec2RunnerProvider(stack, 'EC2 Linux', {
      labels: ['ec2', 'linux', 'x64'],
      imageBuilder: amiX64Builder,
      vpc,
    }),
    new Ec2RunnerProvider(stack, 'EC2 Spot Linux', {
      labels: ['ec2-spot', 'linux', 'x64'],
      imageBuilder: amiX64Builder,
      spot: true,
      vpc,
    }),
    new Ec2RunnerProvider(stack, 'EC2 Linux arm64', {
      labels: ['ec2', 'linux', 'arm64'],
      imageBuilder: Ec2RunnerProvider.imageBuilder(stack, 'AMI Linux arm64 Builder', {
        architecture: Architecture.ARM64,
        awsImageBuilderOptions: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.M6G, ec2.InstanceSize.LARGE),
        },
        vpc,
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.M6G, ec2.InstanceSize.LARGE),
      vpc,
    }),
    new Ec2RunnerProvider(stack, 'EC2 Windows', {
      labels: ['ec2', 'windows', 'x64'],
      imageBuilder: Ec2RunnerProvider.imageBuilder(stack, 'Windows EC2 Builder', {
        os: Os.WINDOWS,
        vpc,
      }),
      vpc,
    }),
  ],
}).metricJobCompleted();

app.synth();
