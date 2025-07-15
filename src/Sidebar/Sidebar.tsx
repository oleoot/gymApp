import styles from '@/Sidebar/Sidebar.module.css';
import Svg from '@/GlobalComponents/Svg.tsx';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar(){
  const navigate = useNavigate();
  const location = useLocation();
  // Всі доступні сторінки
  const sidebarNav = [
    {
      id: 1,
      pageValue: 'home',
      route: '/',
      icons: {
        active: {
          name: 'homeFilled',
          fill: '#fff',
          width: '28',
          height: '28',
        },
        inactive: {
          name: 'homeBorder',
          fill: '#fff',
          width: '28',
          height: '28',
        },
      },
    },
    {
      id: 2,
      pageValue: 'allCourses',
      route: '/allCourses',
      icons: {
        active: {
          name: 'graduationFilled',
          fill: '#fff',
          width: '32',
          height: '32',
        },
        inactive: {
          name: 'graduationBorder',
          fill: '#fff',
          width: '32',
          height: '32',
        },
      },
    },
    {
      id: 3,
      pageValue: 'userCourses',
      route: '/userCourses',
      icons: {
        active: {
          name: 'userFilled',
          fill: '#fff',
          width: '28',
          height: '28',
        },
        inactive: {
          name: 'userBorder',
          fill: '#fff',
          width: '28',
          height: '28',
        },
      },
    },
    {
      id: 4,
      pageValue: 'messages',
      route: '/messages',
      icons: {
        active: {
          name: 'messageFilled',
          fill: '#fff',
          width: '28',
          height: '28',
        },
        inactive: {
          name: 'messageBorder',
          fill: '#fff',
          width: '28',
          height: '28',
        },
      },
    },
    {
      id: 5,
      pageValue: 'settings',
      route: '/settings',
      icons: {
        active: {
          name: 'settingsFilled',
          fill: '#fff',
          width: '30',
          height: '30',
        },
        inactive: {
          name: 'settingsBorder',
          fill: '#fff',
          width: '30',
          height: '30',
        },
      },
    },
  ]
  return(
    <>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarTop}>
          <img src="/images/logo.svg" alt="logo" className={styles.logoIcon}/>
        </div>
        <div className={styles.sidebarCenter}>
          {sidebarNav.map(({ route, pageValue, icons }) => {
            const isActive = location.pathname === route;
            const icon = isActive ? icons.active : icons.inactive;
            return (
              <div
                key={pageValue}
                className={styles.sidebarIconWrap}
                onClick={() => navigate(route)}
              >
                <Svg
                  width={icon.width}
                  height={icon.height}
                  fill={icon.fill}
                  iconName={icon.name}
                  iconClass={styles.sidebarIcon}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.sidebarBottom}>
          <Svg
            width='28'
            height='28'
            fill='#fff'
            iconName='logout'
            iconClass='appLogo'
          />
        </div>
      </div>
    </>
  )
}

export default Sidebar
