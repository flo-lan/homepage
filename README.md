This is a modern, boilerplate Next.js application configured with Tailwind CSS for styling, ESLint for linting, and Prettier for consistent code formatting.

## ✨ Features

- 🐋 Docker
- ✅ Next.js 12+
- 🎨 Tailwind CSS
- 🧹 ESLint with Airbnb base config
- 🧼 Prettier integration
- 🔄 Auto-formatting on save (with VSCode)
- 🚀 Fast development workflow with `next dev`
- 📨 Contact form mails with nodemailer, dev mail server with mailhog

## Getting Started

First, run the development server:

```bash
docker-compose up
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## CI/CD

GitLab CI is configured in .gitlab-ci.yml to build and test the app using Docker. The pipeline builds images from the Dockerfile and can push them to a container registry. This ensures consistent, containerized builds for every commit.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
