/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Company entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Company Id.
     */
    id: string;
    /**
     * Picture Id.
     */
    pictureId?: string;
    /**
     * Company name.
     */
    company?: string;
    /**
     * Sub-domain.
     */
    domain: string;
}
