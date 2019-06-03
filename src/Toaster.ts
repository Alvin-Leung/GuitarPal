import { Toaster, Position, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const toaster = Toaster.create({
  position: Position.TOP
});

export class SuccessToaster {
  public static show(message: string) {
    toaster.show({
      message: message,
      intent: Intent.SUCCESS,
      icon: IconNames.TICK
    });
  }
}

export class ErrorToaster {
    public static show(errorMessage: string) {
      toaster.show({
        message: errorMessage,
        intent: Intent.DANGER,
        icon: IconNames.STOP
      });
    }
  }
