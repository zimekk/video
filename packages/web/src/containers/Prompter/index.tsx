import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { marked } from "marked";
import cx from "classnames";
import styles from "./styles.module.scss";

const LIST = [
  `
# Heading 1

## Heading 1.1

Text 1

Text 2

Text 3

## Heading 1.2

Text 1

Text 2

Text 3

## Heading 1.3

Text 1

Text 2

Text 3
`,
  `
# Text 2


`,
];

function List({
  list,
  selected,
  onSelect,
}: {
  list: string[];
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <section className={styles.List}>
      {list.map((item, index) => (
        <div key={index} className={cx(selected === index && styles.selected)}>
          <a href="#" onClick={(e) => (e.preventDefault(), onSelect(index))}>
            {item}
          </a>
        </div>
      ))}
    </section>
  );
}

function Item({
  item,
  onChange,
}: {
  item: string;
  onChange: (item: string) => void;
}) {
  const [editable, setEditable] = useState(false);
  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    ({ target }) => onChange(target.value),
    [onChange],
  );

  // https://github.com/snakesilk/react-fullscreen
  const handle = useFullScreenHandle();

  const text = useMemo(() => marked.parse(item), [item]);

  return (
    <section className={styles.Item}>
      <div style={{ width: "10%" }}>
        <label>
          <input
            type="checkbox"
            checked={editable}
            onChange={({ target }) => setEditable(target.checked)}
          />
          <span>editable</span>
        </label>
        <button onClick={handle.enter}>fullscreen</button>
      </div>
      <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
        {editable && (
          <textarea value={item} onChange={handleChange} rows={10} />
        )}
      </div>
      <div style={{ width: "50%" }}>
        <FullScreen handle={handle}>
          <article
            className={styles.Text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </FullScreen>
      </div>
    </section>
  );
}

function Preview({ item }: { item: string }) {
  // https://github.com/snakesilk/react-fullscreen
  const handle = useFullScreenHandle();

  const text = useMemo(() => marked.parse(item) as string, [item]);

  return (
    <section className={styles.Preview}>
      <FullScreen handle={handle}>
        <article
          className={styles.Text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </FullScreen>
    </section>
  );
}

function Prompter() {
  const [list, setList] = useState(LIST);
  const [selected, setSelected] = useState(0);

  const handleChange = useCallback(
    (text: string) =>
      setList((list) =>
        list.map((item, key) => (key === selected ? text : item)),
      ),
    [selected],
  );

  return (
    <div className={styles.Prompter}>
      <List list={list} selected={selected} onSelect={setSelected} />
      <Item item={list[selected]} onChange={handleChange} />
    </div>
  );
}

export default function Section() {
  return (
    <section className={styles.Section}>
      <h3>Prompter</h3>
      <Prompter />
    </section>
  );
}
