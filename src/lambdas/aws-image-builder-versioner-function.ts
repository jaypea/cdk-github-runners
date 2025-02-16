// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for AwsImageBuilderVersionerFunction
 */
export interface AwsImageBuilderVersionerFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/lambdas/aws-image-builder-versioner.
 */
export class AwsImageBuilderVersionerFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: AwsImageBuilderVersionerFunctionProps) {
    super(scope, id, {
      description: 'src/lambdas/aws-image-builder-versioner.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs16.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/lambdas/aws-image-builder-versioner.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}