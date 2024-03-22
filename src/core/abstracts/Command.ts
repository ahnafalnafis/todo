/**
 * A simple implementation of Command design pattern, see
 * https://refactoring.guru/design-patterns/command/
 */
export default interface Command<TParam, TReturn> {
  execute(param: TParam): Promise<TReturn>;
}
