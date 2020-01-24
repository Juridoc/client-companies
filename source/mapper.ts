/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import { Entity } from './entity';

/**
 * Companies mapper class.
 */
@Injection.Describe({ singleton: true, name: 'companies' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Load the company that corresponds to the specified domain.
   * @param domain Company subdomain.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the company entity.
   * @throws Throws an error when the company wasn't loaded.
   */
  @Class.Public()
  public async load(domain: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(domain, fields))!;
  }
}
