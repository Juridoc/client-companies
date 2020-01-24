/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Companies mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the company that corresponds to the specified domain.
     * @param domain Company subdomain.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the company entity.
     * @throws Throws an error when the company wasn't loaded.
     */
    load(domain: string, fields?: string[]): Promise<Entity>;
}
