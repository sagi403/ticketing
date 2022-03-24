import { Publisher, Subjects, TicketUpdatedEvent } from "@slticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
