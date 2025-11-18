export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
};

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
 * useful for Docker builds.
 */
skipValidation: !!process.env.SKIP_ENV_VALIDATION;

/**
 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
 * `SOME_VAR=''` will throw an error.
 */
emptyStringAsUndefined: true,
};
