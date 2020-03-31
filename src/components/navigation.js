import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Innovations</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/needs/">Needs</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/needsSubmit/">Submit Innovation</Link>
      </li>
    </ul>
  </nav>
)
