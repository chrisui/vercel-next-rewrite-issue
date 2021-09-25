## Reproduction Steps

1. Deploy to vercel
2. Note how a path such as `/for-clinics` works fine as a fallback rewrite
3. Note how deployed api function `/api/hello` works fine
4. Note how fallback api route `/api/quizzes/status FAILS with an odd redirect and 404 behaviour

## Expected Behaviour

/api/* paths should fallback rewrite appropriately.

1. Visit same paths when running locally with `next dev`