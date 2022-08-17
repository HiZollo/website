import styles from '@/styles/Commands.module.css';

function TableHeader () {
  return (
    <thead>
      <tr>
        <td className={styles['helplist-header']}><strong>指令</strong></td>
        <td className={styles['helplist-header']}><strong>替代指令</strong></td>
        <td className={styles['helplist-header']}><strong>指令說明</strong></td>
        <td className={styles['helplist-header']}><strong>範例</strong></td>
      </tr>
    </thead>
  );
}

function SlashTableHeader () {
  return (
    <thead>
      <tr>
        <td className={styles['helplist-header']}><strong>指令</strong></td>
        <td className={styles['helplist-header']}><strong>指令說明</strong></td>
      </tr>
    </thead>
  );
}

export { TableHeader, SlashTableHeader };
