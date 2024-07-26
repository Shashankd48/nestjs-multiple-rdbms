import { PartialType } from '@nestjs/swagger';
import { CreateTanantDatabaseDto } from './create-tanant-database.dto';

export class UpdateTanantDatabaseDto extends PartialType(CreateTanantDatabaseDto) {}
