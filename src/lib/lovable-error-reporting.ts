/**
 * Lightweight error reporter — logs to the console with context.
 * Replaces the previous Lovable-specific telemetry integration.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}): void {
  const prefix = context["boundary"] ? `[${String(context["boundary"])}] ` : "";
  console.error(`${prefix}Unhandled error:`, error, context);
}
