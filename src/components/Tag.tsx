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
import { readableTags } from '@lib/constants';

interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return (
    <div className={styles.tag}>
      {tag === 'react' && <React />}
      {tag === 'javascript' && <JavaScript />}
      {tag === 'typescript' && <TypeScript />}
      {tag === 'css' && <CSS />}
      {tag === 'html' && <HTML />}
      {tag === 'accessibility' && <Accessibility />}
      {tag === 'sveltekit' && <Svelte />}
      {tag === 'nextjs' && <NextJS />}
      {tag === 'git' && <Git />}
      {readableTags[tag]}
    </div>
  );
}
