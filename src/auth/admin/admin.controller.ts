import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AdminAuthService } from "./admin.service";
import { LoginDto } from "../dto/login.dto";

@Controller("auth")
export class AdminController {
  constructor(private readonly authService: AdminAuthService) {}

  @Post("login")
  @HttpCode(200)
  async loginAdmin(
    @Body() loginAdminDto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.loginAdmin(loginAdminDto, res);
  }

  @Post("refresh-token")
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshToken(req, res);
  }

  @Get("logout")
  async logoutAdmin(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.logoutAdmin(req, res);
  }
}
