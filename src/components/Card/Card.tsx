import React from 'react';
import { Card as AntdCard, Image } from 'antd';
import Meta from 'antd/es/card/Meta';

import { Goods } from '@/features/goods/types';
import { Actions } from '../Actions';

import styles from './Card.module.scss';

type CardProps = {
  goods: Goods;
};

export function Card({ goods }: CardProps) {
  return (
    <AntdCard
      cover={
        <Image
          alt={goods.name}
          src={`${process.env.BASE_URL}${goods.image}`}
          className={styles.image}
        />
      }
    >
      <Meta title={goods.name} description={`${goods.price} ₽`} className={styles.meta} />
      <Actions goods={goods} />
    </AntdCard>
  );
}
