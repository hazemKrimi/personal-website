import { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../../styles/theme';
import { Props } from './types';
import { Bar } from './styles';
import IconButton from '../IconButton';
import Button from '../Button';

const MobileNav = ({ open, close }: Props) => {
  const { mode, toggle } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        document.addEventListener('mouseup', (event) => {
          if (ref.current && !ref.current.contains(event.target as Node))
            return;
        });
      } else {
        document.addEventListener('mouseup', (event) => {
          if (ref.current && !ref.current.contains(event.target as Node))
            close();
        });
      }
    });

    return () => {
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('mouseup', () => {});
    };
  });

  return (
    <Bar open={open} ref={ref}>
      <div className='close'>
        <IconButton
          alt='Theme toggler'
          icon={
            mode === 'dark' ? '/icons/dark-close.svg' : '/icons/light-close.svg'
          }
          onClick={close}
        />
      </div>
      <div className='mobile-button-wrapper'>
        <Button
          href='#'
          onClick={() => {
            toggle();
            close();
          }}
        >
          {mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
      </div>
      <div className='mobile-button-wrapper'>
        <Button href='/projects' onClick={() => close()}>
          Projects
        </Button>
      </div>
      <div className='mobile-button-wrapper'>
        <Button href='/blog' onClick={() => close()}>
          Blog
        </Button>
      </div>
      <div className='mobile-button-wrapper'>
        <Button href='/contact' onClick={() => close()}>
          Contact
        </Button>
      </div>
    </Bar>
  );
};

export default MobileNav;
