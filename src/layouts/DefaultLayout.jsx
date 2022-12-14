import { Title, Meta, Link } from 'react-head'
import { useFela } from 'react-fela'
import favicon from './favicon.png'

export function DefaultLayout({ meta, children }) {
  const { css } = useFela()
  return (
    <div role='main'>
      {meta.title ? <Title>{meta.title}</Title> : null}
      {meta.description ? <Meta name='description' content={meta.description} /> : null}
      <Link rel='icon' type='image/png' href={favicon} />

      <div
        className={css({
          margin: '0 auto',
          background: 'darkolivegreen',
          color: 'whitesmoke',
          padding: '1rem',
          opacity: '90%',
          lineHeight: '1.5rem',
          textAlign: 'justify',
          maxWidth: '40rem',
          fontSize: '1.125rem',
          fontFamily: 'Segoe UI, sans-serif'
        })}
      >
        {children}
      </div>
    </div>
  )
}
