/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Company entity class.
 */
@RestDB.Schema.Entity('accounts/company')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Company Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Picture Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public pictureId?: string;

  /**
   * Company name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public company?: string;

  /**
   * Sub-domain.
   */
  @RestDB.Schema.Pattern(/[a-z0-9]([a-z0-9-]{0,30}[a-z0-9])/, 'domain')
  @Class.Public()
  public domain!: string;
}
