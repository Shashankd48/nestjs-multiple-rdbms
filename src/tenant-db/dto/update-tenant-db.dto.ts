import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantDbDto } from './create-tenant-db.dto';

export class UpdateTenantDbDto extends PartialType(CreateTenantDbDto) {}
