import { useState } from 'react';
import '../index.css';
import Clickable from '../../../components/Clickable';

const OrderList = () => {
  const [loginInfo, setLoginInfo] = useState(undefined);

  const myPageBox = loginInfo === undefined;

  return (
    <div>
      <div className='sidebar'>
        <nav className='main-nav'>
          <h3>Menu</h3>
          <ul>
            <li>
              <Clickable href={'/partners/myProducts'}>
                <i className='fa-solid fa-shop'></i> 상품 관리
              </Clickable>
            </li>
            <li>
              <Clickable href={'/partners/orders'}>
                <i className='fa-solid list-check fa-list-check'></i> 주문 관리
              </Clickable>
            </li>
            <li>
              <Clickable href={'/partners/requests'}>
                <i className='fa-regular fa-comment-dots'></i> 주문제작 관리
              </Clickable>
            </li>
          </ul>
        </nav>
      </div>

      <div className='MainItem'>
        <div className='Title'>
          <h2>상품 관리</h2> <br />
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>제조연월일</th>
                <th>상품이름</th>
                <th>원산지</th>
                <th>용량</th>
                <th>판매가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023/11/11</td>
                <td>세르메니아 블렌드</td>
                <td>브라질 50%, 케냐 30%, 아르헨티나 5%</td>
                <td>100g</td>
                <td>2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Clickable href={'/partners/myProducts/addproducts'}>
          <label id='right'>등록</label>
        </Clickable>
      </div>
    </div>
  );
};

export default OrderList;
