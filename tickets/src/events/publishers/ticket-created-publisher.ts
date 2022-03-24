import { Publisher, Subjects, TicketCreatedEvent } from "@slticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
