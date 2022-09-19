import React from '@components/SVGs/React';
import JavaScript from '@components/SVGs/JavaScript';
import TypeScript from '@components/SVGs/TypeScript';
import CSS from '@components/SVGs/CSS';
import HTML from '@components/SVGs/HTML';
import Accessibility from '@components/SVGs/Accessibility';
import Svelte from '@components/SVGs/Svelte';
import NextJS from '@components/SVGs/NextJS';
import Git from '@components/SVGs/Git';
import styles from './Tag.module.scss';

interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return (
    <div className={styles.tag}>
      {tag === 'React' && <React />}
      {tag === 'JavaScript' && <JavaScript />}
      {tag === 'TypeScript' && <TypeScript />}
      {tag === 'CSS' && <CSS />}
      {tag === 'HTML' && <HTML />}
      {tag === 'Accessibility' && <Accessibility />}
      {tag === 'SvelteKit' && <Svelte />}
      {tag === 'NextJS' && <NextJS />}
      {tag === 'Git' && <Git />}
      {tag}
    </div>
  );
}
