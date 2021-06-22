import styled from 'styled-components';

export default function SvgBackground() {
  return (
    <Svg width="535" height="486" viewBox="0 0 535 486" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M88.3406 306.66C2.95595 260.246 -24.9995 151.063 27.5731 69.3262L30.066 65.4503C39.1123 51.3858 50.5814 39.0372 63.9405 28.9784V28.9784C132.698 -22.7929 231.369 -1.65329 272.882 73.7426L296.705 117.011C319.781 158.922 358.638 189.884 404.645 203.017L454.07 217.127C501.059 230.541 533.657 273.228 534.227 322.091V322.091V322.091C539.228 381.375 504.725 436.913 449.361 458.695L413.651 472.745C330.852 505.321 236.708 471.913 192.964 394.433V394.433C176.514 365.298 152.204 341.376 122.809 325.397L88.3406 306.66Z" fill="#313131" fillOpacity="0.04"/>
    </Svg>
  )
}

const Svg = styled.svg`
  position:absolute;
  top:0; bottom:0; left:0; right:0;
  transform: translate(-50px, 120px);
  @media (max-width: 768px){
    path {
      fill-opacity: 0.06;
    }
  }
`;