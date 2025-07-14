import styles from '@/Sidebar/Sidebar.module.css';
import Svg from '@/GlobalComponents/Svg.tsx';
import { useState } from 'react';



function Sidebar(){
    const [activePage, setActivePage] = useState('home'); // По дефолту активна сторіна - Домашня
    // Всі доступні сторінки
    const sidebarNav = [
      {
        id: 1,
        pageValue: 'home',
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
            <Svg
              width='50'
              height='50'
              fill='#fff'
              iconName='wallet'
              iconClass='appLogo'
            />
          </div>
          <div className={styles.sidebarCenter}>
            {sidebarNav.map(({ pageValue, icons }) => {
              const isActive = activePage === pageValue;
              const icon = isActive ? icons.active : icons.inactive;
              return (
                <div
                  key={pageValue}
                  className={styles.sidebarIconWrap}
                  onClick={() => setActivePage(pageValue)}
                >
                  <Svg
                    width={icon.width}
                    height={icon.height}
                    fill={icon.fill}
                    iconName={icon.name}
                    iconClass="sidebarIcon"
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
