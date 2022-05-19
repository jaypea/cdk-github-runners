# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeBuildRunner <a name="CodeBuildRunner" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner"></a>

- *Implements:* <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>

GitHub Actions runner provider using CodeBuild to execute the actions.

Creates a project that gets started for each job.

#### Initializers <a name="Initializers" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer"></a>

```typescript
import { CodeBuildRunner } from '@cloudsnorkel/cdk-github-runners'

new CodeBuildRunner(scope: Construct, id: string, props: CodeBuildRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps">CodeBuildRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps">CodeBuildRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.getStepFunctionTask">getStepFunctionTask</a></code> | Generate step function tasks that execute the runner. |

---

##### `toString` <a name="toString" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getStepFunctionTask` <a name="getStepFunctionTask" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.getStepFunctionTask"></a>

```typescript
public getStepFunctionTask(parameters: RunnerRuntimeParameters): IChainable
```

Generate step function tasks that execute the runner.

###### `parameters`<sup>Required</sup> <a name="parameters" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.getStepFunctionTask.parameter.parameters"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters">RunnerRuntimeParameters</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.isConstruct"></a>

```typescript
import { CodeBuildRunner } from '@cloudsnorkel/cdk-github-runners'

CodeBuildRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.label">label</a></code> | <code>string</code> | GitHub Actions label associated with this runner provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.project">project</a></code> | <code>aws-cdk-lib.aws_codebuild.Project</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group associated with runners. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network in which runners will be placed. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `label`<sup>Required</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

GitHub Actions label associated with this runner provider.

---

##### `project`<sup>Required</sup> <a name="project" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* aws-cdk-lib.aws_codebuild.Project

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

Security group associated with runners.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunner.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network in which runners will be placed.

---


### FargateRunner <a name="FargateRunner" id="@cloudsnorkel/cdk-github-runners.FargateRunner"></a>

- *Implements:* <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>

GitHub Actions runner provider using Fargate to execute the actions.

Creates a task definition with a single container that gets started for each job.

#### Initializers <a name="Initializers" id="@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer"></a>

```typescript
import { FargateRunner } from '@cloudsnorkel/cdk-github-runners'

new FargateRunner(scope: Construct, id: string, props: FargateRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps">FargateRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudsnorkel/cdk-github-runners.FargateRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps">FargateRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.getStepFunctionTask">getStepFunctionTask</a></code> | Generate step function tasks that execute the runner. |

---

##### `toString` <a name="toString" id="@cloudsnorkel/cdk-github-runners.FargateRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getStepFunctionTask` <a name="getStepFunctionTask" id="@cloudsnorkel/cdk-github-runners.FargateRunner.getStepFunctionTask"></a>

```typescript
public getStepFunctionTask(parameters: RunnerRuntimeParameters): IChainable
```

Generate step function tasks that execute the runner.

###### `parameters`<sup>Required</sup> <a name="parameters" id="@cloudsnorkel/cdk-github-runners.FargateRunner.getStepFunctionTask.parameter.parameters"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters">RunnerRuntimeParameters</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cloudsnorkel/cdk-github-runners.FargateRunner.isConstruct"></a>

```typescript
import { FargateRunner } from '@cloudsnorkel/cdk-github-runners'

FargateRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cloudsnorkel/cdk-github-runners.FargateRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.Cluster</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.container">container</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.label">label</a></code> | <code>string</code> | GitHub Actions label associated with this runner provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.task">task</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group associated with runners. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunner.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network in which runners will be placed. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_ecs.Cluster

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `container`<sup>Required</sup> <a name="container" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.container"></a>

```typescript
public readonly container: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `label`<sup>Required</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

GitHub Actions label associated with this runner provider.

---

##### `task`<sup>Required</sup> <a name="task" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.task"></a>

```typescript
public readonly task: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

Security group associated with runners.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.FargateRunner.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network in which runners will be placed.

---


### GitHubRunners <a name="GitHubRunners" id="@cloudsnorkel/cdk-github-runners.GitHubRunners"></a>

#### Initializers <a name="Initializers" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer"></a>

```typescript
import { GitHubRunners } from '@cloudsnorkel/cdk-github-runners'

new GitHubRunners(scope: Construct, id: string, props: GitHubRunnersProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunnersProps">GitHubRunnersProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.GitHubRunnersProps">GitHubRunnersProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.isConstruct"></a>

```typescript
import { GitHubRunners } from '@cloudsnorkel/cdk-github-runners'

GitHubRunners.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.property.defaultProvider">defaultProvider</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a></code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.property.props">props</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunnersProps">GitHubRunnersProps</a></code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.property.providers">providers</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>[]</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunners.property.secrets">secrets</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets">Secrets</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: IRunnerProvider;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.property.props"></a>

```typescript
public readonly props: GitHubRunnersProps;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.GitHubRunnersProps">GitHubRunnersProps</a>

---

##### `providers`<sup>Required</sup> <a name="providers" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.property.providers"></a>

```typescript
public readonly providers: IRunnerProvider[];
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>[]

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cloudsnorkel/cdk-github-runners.GitHubRunners.property.secrets"></a>

```typescript
public readonly secrets: Secrets;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.Secrets">Secrets</a>

---


### LambdaRunner <a name="LambdaRunner" id="@cloudsnorkel/cdk-github-runners.LambdaRunner"></a>

- *Implements:* <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>

GitHub Actions runner provider using Lambda to execute the actions.

Creates a Docker-based function that gets executed for each job.

#### Initializers <a name="Initializers" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer"></a>

```typescript
import { LambdaRunner } from '@cloudsnorkel/cdk-github-runners'

new LambdaRunner(scope: Construct, id: string, props: LambdaRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps">LambdaRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps">LambdaRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.getStepFunctionTask">getStepFunctionTask</a></code> | Generate step function tasks that execute the runner. |

---

##### `toString` <a name="toString" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getStepFunctionTask` <a name="getStepFunctionTask" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.getStepFunctionTask"></a>

```typescript
public getStepFunctionTask(parameters: RunnerRuntimeParameters): IChainable
```

Generate step function tasks that execute the runner.

###### `parameters`<sup>Required</sup> <a name="parameters" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.getStepFunctionTask.parameter.parameters"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters">RunnerRuntimeParameters</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.isConstruct"></a>

```typescript
import { LambdaRunner } from '@cloudsnorkel/cdk-github-runners'

LambdaRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.label">label</a></code> | <code>string</code> | GitHub Actions label associated with this runner provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group associated with runners. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network in which runners will be placed. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `function`<sup>Required</sup> <a name="function" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.function"></a>

```typescript
public readonly function: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `label`<sup>Required</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

GitHub Actions label associated with this runner provider.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

Security group associated with runners.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.LambdaRunner.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network in which runners will be placed.

---


### Secrets <a name="Secrets" id="@cloudsnorkel/cdk-github-runners.Secrets"></a>

Secrets required for GitHub runners operation.

#### Initializers <a name="Initializers" id="@cloudsnorkel/cdk-github-runners.Secrets.Initializer"></a>

```typescript
import { Secrets } from '@cloudsnorkel/cdk-github-runners'

new Secrets(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudsnorkel/cdk-github-runners.Secrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudsnorkel/cdk-github-runners.Secrets.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cloudsnorkel/cdk-github-runners.Secrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cloudsnorkel/cdk-github-runners.Secrets.isConstruct"></a>

```typescript
import { Secrets } from '@cloudsnorkel/cdk-github-runners'

Secrets.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cloudsnorkel/cdk-github-runners.Secrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.property.github">github</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.property.githubPrivateKey">githubPrivateKey</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.Secrets.property.webhook">webhook</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudsnorkel/cdk-github-runners.Secrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `github`<sup>Required</sup> <a name="github" id="@cloudsnorkel/cdk-github-runners.Secrets.property.github"></a>

```typescript
public readonly github: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

---

##### `githubPrivateKey`<sup>Required</sup> <a name="githubPrivateKey" id="@cloudsnorkel/cdk-github-runners.Secrets.property.githubPrivateKey"></a>

```typescript
public readonly githubPrivateKey: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cloudsnorkel/cdk-github-runners.Secrets.property.webhook"></a>

```typescript
public readonly webhook: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

---


## Structs <a name="Structs" id="Structs"></a>

### CodeBuildRunnerProps <a name="CodeBuildRunnerProps" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps"></a>

#### Initializer <a name="Initializer" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.Initializer"></a>

```typescript
import { CodeBuildRunnerProps } from '@cloudsnorkel/cdk-github-runners'

const codeBuildRunnerProps: CodeBuildRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.runnerVersion">runnerVersion</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a></code> | Version of GitHub Runners to install. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.computeType">computeType</a></code> | <code>aws-cdk-lib.aws_codebuild.ComputeType</code> | The type of compute to use for this build. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.label">label</a></code> | <code>string</code> | GitHub Actions label used for this provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security Group to assign to this instance. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The number of minutes after which AWS CodeBuild stops the build if it's not complete. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC to launch the runners in. |

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.ONE_MONTH

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `runnerVersion`<sup>Optional</sup> <a name="runnerVersion" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.runnerVersion"></a>

```typescript
public readonly runnerVersion: RunnerVersion;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a>
- *Default:* latest version available

Version of GitHub Runners to install.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.computeType"></a>

```typescript
public readonly computeType: ComputeType;
```

- *Type:* aws-cdk-lib.aws_codebuild.ComputeType
- *Default:* {@link ComputeType#SMALL}

The type of compute to use for this build.

See the {@link ComputeType} enum for the possible values.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string
- *Default:* 'codebuild'

GitHub Actions label used for this provider.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* public project with no security group

Security Group to assign to this instance.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* no subnet

Where to place the network interfaces within the VPC.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(1)

The number of minutes after which AWS CodeBuild stops the build if it's not complete.

For valid values, see the timeoutInMinutes field in the AWS
CodeBuild User Guide.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.CodeBuildRunnerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* no VPC

VPC to launch the runners in.

---

### FargateRunnerProps <a name="FargateRunnerProps" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps"></a>

#### Initializer <a name="Initializer" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.Initializer"></a>

```typescript
import { FargateRunnerProps } from '@cloudsnorkel/cdk-github-runners'

const fargateRunnerProps: FargateRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.runnerVersion">runnerVersion</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a></code> | Version of GitHub Runners to install. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | Assign public IP to the runner task. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.Cluster</code> | Existing Fargate cluster to use. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.cpu">cpu</a></code> | <code>number</code> | The number of cpu units used by the task. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.ephemeralStorageGiB">ephemeralStorageGiB</a></code> | <code>number</code> | The amount (in GiB) of ephemeral storage to be allocated to the task. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.label">label</a></code> | <code>string</code> | GitHub Actions label used for this provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | The amount (in MiB) of memory used by the task. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security Group to assign to the task. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC to launch the runners in. |

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.ONE_MONTH

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `runnerVersion`<sup>Optional</sup> <a name="runnerVersion" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.runnerVersion"></a>

```typescript
public readonly runnerVersion: RunnerVersion;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a>
- *Default:* latest version available

Version of GitHub Runners to install.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* true

Assign public IP to the runner task.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_ecs.Cluster
- *Default:* a new cluster

Existing Fargate cluster to use.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number
- *Default:* 1024

The number of cpu units used by the task.

For tasks using the Fargate launch type,
this field is required and you must use one of the following values,
which determines your range of valid values for the memory parameter:

256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)

512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)

1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)

2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)

4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)

---

##### `ephemeralStorageGiB`<sup>Optional</sup> <a name="ephemeralStorageGiB" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.ephemeralStorageGiB"></a>

```typescript
public readonly ephemeralStorageGiB: number;
```

- *Type:* number
- *Default:* 20

The amount (in GiB) of ephemeral storage to be allocated to the task.

The maximum supported value is 200 GiB.

NOTE: This parameter is only supported for tasks hosted on AWS Fargate using platform version 1.4.0 or later.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string
- *Default:* 'fargate'

GitHub Actions label used for this provider.

---

##### `memoryLimitMiB`<sup>Optional</sup> <a name="memoryLimitMiB" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number
- *Default:* 2048

The amount (in MiB) of memory used by the task.

For tasks using the Fargate launch type,
this field is required and you must use one of the following values, which determines your range of valid values for the cpu parameter:

512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)

1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)

2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)

Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)

Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group

Security Group to assign to the task.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.FargateRunnerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* default account VPC

VPC to launch the runners in.

---

### GitHubRunnersProps <a name="GitHubRunnersProps" id="@cloudsnorkel/cdk-github-runners.GitHubRunnersProps"></a>

Properties of the GitHubRunners.

#### Initializer <a name="Initializer" id="@cloudsnorkel/cdk-github-runners.GitHubRunnersProps.Initializer"></a>

```typescript
import { GitHubRunnersProps } from '@cloudsnorkel/cdk-github-runners'

const gitHubRunnersProps: GitHubRunnersProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunnersProps.property.defaultProviderLabel">defaultProviderLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.GitHubRunnersProps.property.providers">providers</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>[]</code> | *No description.* |

---

##### `defaultProviderLabel`<sup>Optional</sup> <a name="defaultProviderLabel" id="@cloudsnorkel/cdk-github-runners.GitHubRunnersProps.property.defaultProviderLabel"></a>

```typescript
public readonly defaultProviderLabel: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@cloudsnorkel/cdk-github-runners.GitHubRunnersProps.property.providers"></a>

```typescript
public readonly providers: IRunnerProvider[];
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>[]

---

### LambdaRunnerProps <a name="LambdaRunnerProps" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps"></a>

#### Initializer <a name="Initializer" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.Initializer"></a>

```typescript
import { LambdaRunnerProps } from '@cloudsnorkel/cdk-github-runners'

const lambdaRunnerProps: LambdaRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.runnerVersion">runnerVersion</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a></code> | Version of GitHub Runners to install. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.label">label</a></code> | <code>string</code> | GitHub Actions label used for this provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security Group to assign to this instance. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC to launch the runners in. |

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.ONE_MONTH

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `runnerVersion`<sup>Optional</sup> <a name="runnerVersion" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.runnerVersion"></a>

```typescript
public readonly runnerVersion: RunnerVersion;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a>
- *Default:* latest version available

Version of GitHub Runners to install.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 10 GiB

The size of the function’s /tmp directory in MiB.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string
- *Default:* 'lambda'

GitHub Actions label used for this provider.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 2048

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* public lambda with no security group

Security Group to assign to this instance.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* no subnet

Where to place the network interfaces within the VPC.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(15)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.LambdaRunnerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* no VPC

VPC to launch the runners in.

---

### RunnerProviderProps <a name="RunnerProviderProps" id="@cloudsnorkel/cdk-github-runners.RunnerProviderProps"></a>

#### Initializer <a name="Initializer" id="@cloudsnorkel/cdk-github-runners.RunnerProviderProps.Initializer"></a>

```typescript
import { RunnerProviderProps } from '@cloudsnorkel/cdk-github-runners'

const runnerProviderProps: RunnerProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerProviderProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerProviderProps.property.runnerVersion">runnerVersion</a></code> | <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a></code> | Version of GitHub Runners to install. |

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cloudsnorkel/cdk-github-runners.RunnerProviderProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.ONE_MONTH

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `runnerVersion`<sup>Optional</sup> <a name="runnerVersion" id="@cloudsnorkel/cdk-github-runners.RunnerProviderProps.property.runnerVersion"></a>

```typescript
public readonly runnerVersion: RunnerVersion;
```

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion">RunnerVersion</a>
- *Default:* latest version available

Version of GitHub Runners to install.

---

### RunnerRuntimeParameters <a name="RunnerRuntimeParameters" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters"></a>

#### Initializer <a name="Initializer" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.Initializer"></a>

```typescript
import { RunnerRuntimeParameters } from '@cloudsnorkel/cdk-github-runners'

const runnerRuntimeParameters: RunnerRuntimeParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.githubDomainPath">githubDomainPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.ownerPath">ownerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.repoPath">repoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.runnerNamePath">runnerNamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.runnerTokenPath">runnerTokenPath</a></code> | <code>string</code> | *No description.* |

---

##### `githubDomainPath`<sup>Required</sup> <a name="githubDomainPath" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.githubDomainPath"></a>

```typescript
public readonly githubDomainPath: string;
```

- *Type:* string

---

##### `ownerPath`<sup>Required</sup> <a name="ownerPath" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.ownerPath"></a>

```typescript
public readonly ownerPath: string;
```

- *Type:* string

---

##### `repoPath`<sup>Required</sup> <a name="repoPath" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.repoPath"></a>

```typescript
public readonly repoPath: string;
```

- *Type:* string

---

##### `runnerNamePath`<sup>Required</sup> <a name="runnerNamePath" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.runnerNamePath"></a>

```typescript
public readonly runnerNamePath: string;
```

- *Type:* string

---

##### `runnerTokenPath`<sup>Required</sup> <a name="runnerTokenPath" id="@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters.property.runnerTokenPath"></a>

```typescript
public readonly runnerTokenPath: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### RunnerVersion <a name="RunnerVersion" id="@cloudsnorkel/cdk-github-runners.RunnerVersion"></a>

#### Initializers <a name="Initializers" id="@cloudsnorkel/cdk-github-runners.RunnerVersion.Initializer"></a>

```typescript
import { RunnerVersion } from '@cloudsnorkel/cdk-github-runners'

new RunnerVersion(version: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion.Initializer.parameter.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@cloudsnorkel/cdk-github-runners.RunnerVersion.Initializer.parameter.version"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion.latest">latest</a></code> | *No description.* |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion.specific">specific</a></code> | *No description.* |

---

##### `latest` <a name="latest" id="@cloudsnorkel/cdk-github-runners.RunnerVersion.latest"></a>

```typescript
import { RunnerVersion } from '@cloudsnorkel/cdk-github-runners'

RunnerVersion.latest()
```

##### `specific` <a name="specific" id="@cloudsnorkel/cdk-github-runners.RunnerVersion.specific"></a>

```typescript
import { RunnerVersion } from '@cloudsnorkel/cdk-github-runners'

RunnerVersion.specific(version: string)
```

###### `version`<sup>Required</sup> <a name="version" id="@cloudsnorkel/cdk-github-runners.RunnerVersion.specific.parameter.version"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.RunnerVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@cloudsnorkel/cdk-github-runners.RunnerVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IRunnerProvider <a name="IRunnerProvider" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider"></a>

- *Extends:* aws-cdk-lib.aws_ec2.IConnectable, aws-cdk-lib.aws_iam.IGrantable

- *Implemented By:* <a href="#@cloudsnorkel/cdk-github-runners.CodeBuildRunner">CodeBuildRunner</a>, <a href="#@cloudsnorkel/cdk-github-runners.FargateRunner">FargateRunner</a>, <a href="#@cloudsnorkel/cdk-github-runners.LambdaRunner">LambdaRunner</a>, <a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider">IRunnerProvider</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider.getStepFunctionTask">getStepFunctionTask</a></code> | Generate step function tasks that execute the runner. |

---

##### `getStepFunctionTask` <a name="getStepFunctionTask" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.getStepFunctionTask"></a>

```typescript
public getStepFunctionTask(parameters: RunnerRuntimeParameters): IChainable
```

Generate step function tasks that execute the runner.

###### `parameters`<sup>Required</sup> <a name="parameters" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.getStepFunctionTask.parameter.parameters"></a>

- *Type:* <a href="#@cloudsnorkel/cdk-github-runners.RunnerRuntimeParameters">RunnerRuntimeParameters</a>

specific build parameters.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.label">label</a></code> | <code>string</code> | GitHub Actions label associated with this runner provider. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group associated with runners. |
| <code><a href="#@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network in which runners will be placed. |

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `label`<sup>Required</sup> <a name="label" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

GitHub Actions label associated with this runner provider.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

Security group associated with runners.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudsnorkel/cdk-github-runners.IRunnerProvider.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network in which runners will be placed.

---
