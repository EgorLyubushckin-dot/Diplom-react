import { sections } from "../data/sections";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Разделы</h2>

      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;