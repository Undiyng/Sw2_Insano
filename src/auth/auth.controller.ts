import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { loginDto } from './login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: loginDto })
  @ApiResponse({ status: 200, description: 'Login successful.', schema: {
    example: {
      message: 'Inicio de sesión exitoso',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    },
  }})
  @ApiResponse({ status: 401, description: 'Invalid credentials.', schema: {
    example: {
      message: 'Credenciales inválidas',
    },
  }})
  async login(@Res() resp, @Body() loginDTO: loginDto) {
    const user = await this.authService.validateUser(loginDTO.email, loginDTO.password);
    if (!user) {
      return resp.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Credenciales inválidas',
      });
    }
    const token = await this.authService.loginFromMongoose(user);
    return resp.status(HttpStatus.OK).json({
      message: 'Inicio de sesión exitoso',
      token: token.access_token,
    });
  }
}