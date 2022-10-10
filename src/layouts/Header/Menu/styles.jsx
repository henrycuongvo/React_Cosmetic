import styled from "styled-components";
export const Menu = styled.div`
  width: 1440px;
  height: 150px;
  background-color: #fff none repeat scroll 0 0;
  border-bottom: 1px solid #f2f2f2;
`;
export const MenuWrapper = styled.div`
  width: 1140px;
  padding: 15px 0px 10px;
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  flex-direction: row;
`;
export const LogoWrapper = styled.div`
  max-width: 135px;
  min-width: 80px;
`;
export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(1140px - 135px);
`;
export const Search_Account_CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
  width: calc(1140px - 135px);
  position: relative;
  align-items: center;
  align-content: center;
`;
export const SearchWrapper = styled.div`
  width: 50%;
`;
export const Search = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 80%;
  height: 36px;
  border: solid 1px #f0f2f5;
  background: #ffffffd9;
  border-radius: 10px;
  Input {
    margin: 5px 15px;
    width: 100%;
    border: none;
    background-color: transparent;
    border: transparent;
    :focus {
      box-shadow: none;
    }
  }
`;

export const IconSearchWraper = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
`;
export const Account_CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  right: 5px;
`;
export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const IconBag = styled.div`
  position: relative;
  .totalProductCart {
    position: absolute;
    top: -5px;
    right: -12px;
    background-color: #cecfd1;
    text-align: center;
    border-radius: 50%;
    line-height: 20px;
    font-weight: 700;
    color: #333;
    font-size: 11px;
    width: 20px;
    height: 20px;
  }
`;
export const IconHeart = styled.div`
  padding: 0px 50px;
`;
export const CartWrapper = styled.div`
  display: flex;
`;
