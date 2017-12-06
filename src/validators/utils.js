'use strict';

import Joi from 'joi';

export const optionsSchema = Joi.object().min(1).required();
