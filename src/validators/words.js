'use strict';

import Joi from 'joi';

export const optionsSchema = Joi.object({
  ml: Joi.string(),
  sl: Joi.string(),
  sp: Joi.string(),
  rel_: Joi.string(),
  rel_jja: Joi.string(),
  rel_jjb: Joi.string(),
  rel_syn: Joi.string(),
  rel_trg: Joi.string(),
  rel_ant: Joi.string(),
  rel_spc: Joi.string(),
  rel_gen: Joi.string(),
  rel_com: Joi.string(),
  rel_par: Joi.string(),
  rel_bga: Joi.string(),
  rel_bgb: Joi.string(),
  rel_rhy: Joi.string(),
  rel_nry: Joi.string(),
  rel_hom: Joi.string(),
  rel_cns: Joi.string(),
  v: Joi.string(),
  topics: Joi.string(),
  lc: Joi.string(),
  rc: Joi.string(),
  max: Joi.number(),
  md: Joi.string().allow(['d', 'p', 's', 'r', 'f']),
  qe: Joi.string(),
}).min(1).required();
