export default function Footer() {
  return (
    <footer className="footer bg-white dark:bg-gray-900">
      <div className="container flex h-20 items-center justify-center border-t-2 border-gray-100 dark:border-gray-800">
        <h1 className="font-semibold text-gray-900 dark:text-white">
          &copy; Copyrights {new Date().getFullYear()} - Develop by ❤️
        </h1>
      </div>
    </footer>
  );
}
