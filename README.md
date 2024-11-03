# Rick and Morty Character Explorer

A React application for exploring characters from the Rick and Morty universe. This app allows users to browse characters, view detailed character information, and paginate through character lists. All data is fetched from the [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Character List**: Browse and paginate through Rick and Morty characters.
- **Pagination**: Navigate between pages of characters.
- **Error Handling**: Displays error messages for invalid or unavailable pages.

## Tech Stack

- **React** with TypeScript
- **React Router** for navigation
- **React Testing Library** and **Jest** for unit and integration testing
- **Custom Hooks** for data fetching and pagination management
- **Rick and Morty API** for character data

## Project Structure

```plaintext
src/
├── components/
│   ├── CharacterCard.tsx        # Renders individual character details
│   ├── CharacterList.tsx        # Displays a list of characters
│   ├── PaginationCharacter.tsx  # Handles pagination controls
├── hooks/
│   ├── useCharacterList.ts      # Custom hook for fetching and managing character data
│   ├── useHandlePagination.ts   # Custom hook for managing pagination state
├── services/
│   ├── api.ts                   # Contains API calls to the Rick and Morty API
├── tests/
│   ├── CharacterList.test.tsx   # Tests for CharacterList component
│   ├── CharacterCard.test.tsx   # Tests for CharacterCard component
│   ├── PaginationCharacter.test.tsx # Tests for pagination
├── App.tsx                      # Main App component
├── main.tsx                    # Application entry point
```

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Vite](https://vitejs.dev/guide/) (for fast builds and a modern development environment)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jean3102/Rick-Morty.git
cd Rick-Morty
npm install

```

### Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
- **`npm run test`**: Runs the Jest test suite in **watch mode**. This allows tests to automatically re-run whenever files change.
- **`npm run coverage`**: Runs the test suite and generates a **code coverage report**. This report shows which parts of the code are covered by tests.


