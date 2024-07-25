import { PartialType } from '@nestjs/mapped-types';
import { CreateAppContentDbDto } from './create-app-content-db.dto';

export class UpdateAppContentDbDto extends PartialType(CreateAppContentDbDto) {}
