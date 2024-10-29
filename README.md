# WePress App

A modern React-based web application with Redux integration and role-based authentication.

## 🚀 Features

- React 18+ with Vite
- Redux Toolkit for state management
- Role-based authentication
- Public and private routing
- Lazy loading components
- Docker support
- Comprehensive testing setup

## 📋 Prerequisites

- Node.js (v18 or higher)
- Yarn (v1.22 or higher)
- Docker (optional)

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/www-printf/wepress-app.git
   cd wepress-app
   ```

2. Install dependencies:

   ```bash
   make install
   # or manually: yarn install
   ```

## 🚀 Development

Start the development server:

```bash
make dev
# or manually: yarn dev
```

The application will be available at `http://localhost:3000`.

## 📦 Build

Build for production:

```bash
make build
# or manually: yarn build
```

## 🧪 Testing

Run tests:

```bash
make test
# or manually: yarn test
```

## 📝 Code Quality

Run linting:

```bash
make lint
# or manually: yarn lint
```

Format code:

```bash
make format
# or manually: yarn format
```

## 🐳 Docker

Build Docker image:

```bash
make docker-build
```

Run Docker container:

```bash
make docker-run
```

Stop Docker container:

```bash
make docker-stop
```

## 📁 Project Structure

```
wepress-app/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Layout components
│   ├── modules/        # Feature modules
│   ├── routes/         # Routing configuration
│   ├── store/          # Redux store setup
│   └── App.jsx         # Root component
├── public/             # Static assets
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── vite.config.js     # Vite configuration
├── Dockerfile         # Docker configuration
├── Makefile          # Make commands
└── package.json      # Project dependencies
```

## 📄 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run tests
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
```

## 📦 Dependencies

Main dependencies:

- React
- React Router DOM
- Redux Toolkit
- PropTypes
- Vite

Dev dependencies:

- ESLint
- Prettier
- Jest
- React Testing Library

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

`````

The key changes made:
1. Fixed code block syntax by using four backticks (````) for proper nesting
2. Added proper spacing between sections
3. Ensured consistent indentation for nested code blocks
4. Fixed the project structure tree formatting
5. Made sure all command blocks are properly formatted
6. Added proper spacing after headings
7. Ensured consistent emoji usage for section headers

This format should now render correctly on GitHub and other markdown viewers.
`````
