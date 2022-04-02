import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@slticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
