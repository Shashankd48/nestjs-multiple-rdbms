import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterDbDto } from './create-master-db.dto';

export class UpdateMasterDbDto extends PartialType(CreateMasterDbDto) {}
