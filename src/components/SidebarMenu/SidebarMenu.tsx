import { useState, type FC } from 'react';
import styles from './SidebarMenu.module.scss';

export interface MenuItem {
  title: string;
  subItems?: MenuItem[];
  onClick?: () => void;
}

export interface SidebarMenuProps {
  isOpen: boolean;
  items: MenuItem[];
  onClose: () => void;
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ isOpen, items, onClose }) => {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={onClose}>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close sidebar">
          ✕
        </button>
        <MenuList items={items} />
      </div>
    </div>
  );
};

const MenuList: FC<{ items: MenuItem[] }> = ({ items }) => (
  <ul className={styles.menuList}>
    {items.map((item, idx) => (
      <MenuItemComponent key={idx} item={item} />
    ))}
  </ul>
);

const MenuItemComponent: FC<{ item: MenuItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = !!item.subItems?.length;

  const handleClick = () => {
    if (hasSubItems) setOpen(!open);
    item.onClick?.();
  };

  return (
    <li className={styles.menuItem}>
      <div
        className={styles.menuItemTitle}
        onClick={handleClick}
        aria-expanded={open}
        role={hasSubItems ? 'button' : undefined}
        tabIndex={hasSubItems ? 0 : undefined}
      >
        {item.title} {hasSubItems && <span className={styles.arrow}>{open ? '▾' : '▸'}</span>}
      </div>
      {hasSubItems && (
        <ul
          className={`${styles.subMenuList} ${open ? styles.subMenuOpen : ''}`}
          style={{ maxHeight: open ? `${item.subItems!.length * 2.5}rem` : '0' }}
        >
          {item.subItems!.map((subItem, idx) => (
            <MenuItemComponent key={idx} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};


