import { aws_logs as logs, aws_stepfunctions as stepfunctions } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { WebhookHandlerFunction } from './lambdas/webhook-handler-function';
import { Secrets } from './secrets';

/**
 * Properties for GithubWebhookHandler
 */
export interface GithubWebhookHandlerProps {

  /**
   * Step function in charge of handling the workflow job events and start the runners.
   */
  readonly orchestrator: stepfunctions.StateMachine;

  /**
   * Secrets used to communicate with GitHub.
   */
  readonly secrets: Secrets;
}

/**
 * Create a Lambda with a public URL to handle GitHub webhook events. After validating the event with the given secret, the orchestrator step function is called with information about the workflow job.
 *
 * This construct is not meant to be used by itself.
 */
export class GithubWebhookHandler extends Construct {

  /**
   * Public URL of webhook to be used with GitHub.
   */
  readonly url: string;

  /**
   * Webhook event handler.
   */
  readonly handler: WebhookHandlerFunction;

  constructor(scope: Construct, id: string, props: GithubWebhookHandlerProps) {
    super(scope, id);

    this.handler = new WebhookHandlerFunction(
      this,
      'webhook-handler',
      {
        description: 'Handle GitHub webhook and start runner orchestrator',
        environment: {
          STEP_FUNCTION_ARN: props.orchestrator.stateMachineArn,
          WEBHOOK_SECRET_ARN: props.secrets.webhook.secretArn,
        },
        timeout: cdk.Duration.seconds(30),
        logRetention: logs.RetentionDays.ONE_MONTH,
      },
    );

    this.url = this.handler.addFunctionUrl({ authType: FunctionUrlAuthType.NONE }).url;

    props.secrets.webhook.grantRead(this.handler);
    props.orchestrator.grantStartExecution(this.handler);
  }
}
