import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Ticket } from "./schema/ticket.schema";
import { Model } from "mongoose";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketSchema: Model<Ticket>
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketSchema.create(createTicketDto);
  }

  findAll() {
    return this.ticketSchema
      .find()
      .populate("eventId")
      .populate("seatId")
      .populate("statusId");
  }

  findOne(id: string) {
    return this.ticketSchema
      .findById(id)
      .populate("eventId")
      .populate("seatId")
      .populate("statusId");
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.ticketSchema.findByIdAndUpdate(id, updateTicketDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.ticketSchema.findByIdAndDelete(id);
  }
}
