import { Injectable, UnauthorizedException } from "@nestjs/common";
import {  AdminDocument } from "../admin/schema/admin.schema";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { AdminService } from "../admin/admin.service";

import * as bcrypt from "bcrypt"
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
      private readonly jwtService: JwtService,
      private readonly adminService: AdminService
  ) {}

  async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin.id,
      is_creator: admin.is_creator,
      is_active: admin.is_active,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async loginAdmin(loginDto: LoginDto, res: Response){
    const admin = await this.adminService.findByEmail(loginDto.email)
    if(!admin){
        throw new UnauthorizedException("Eamil yoki password noto'g'ri")
    }
    const validPassword = await bcrypt.compare(loginDto.password, admin.hashed_password)

    if (!validPassword) {
      throw new UnauthorizedException("Eamil yoki password noto'g'ri");
    }
    const {accessToken, refreshToken} = await this.generateTokens(admin)
    
    res.cookie(
        "refresh_token", 
        refreshToken, {
        maxAge: Number(process.env.COOKIE_TIME)
        })
    const hashed_refresh_token = await bcrypt.hash(refreshToken, 7)
    admin.hashed_refresh_token = hashed_refresh_token

    await admin.save()
    return {
        messaga: "Xush kelibsiz",
        adminId: admin.id,
        accessToken
    }
  }
}
