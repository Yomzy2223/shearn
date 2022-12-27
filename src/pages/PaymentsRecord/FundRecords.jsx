import React, { useEffect, useState } from "react";
import Puff from "react-loading-icons/dist/esm/components/puff";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PaymentRecord } from "../../components/cards/PaymentRecordCard";
import Empty from "../../components/texts/Empty";
import { getFundNotificationFromDb } from "../../utils/dbCalls";
import {
  formatAMPM,
  formatDayMonthYear,
  handleError,
} from "../../utils/globalFunctions";

const FundRecords = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  let effectCalled = 0;

  useEffect(() => {
    if (effectCalled) return;
    getNotifications();
    effectCalled++;
  }, []);

  const getNotifications = async () => {
    try {
      setLoading(true);
      let notifications = await getFundNotificationFromDb(userInfo.email);
      setNotifications(notifications);
      setLoading(false);
    } catch (e) {
      handleError(e);
      setLoading(false);
    }
  };

  console.log(notifications);
  return (
    <Container $loading={loading}>
      {!loading && notifications.length === 0 && (
        <Empty text="There are currently no notification" />
      )}
      {loading ? (
        <Puff stroke="#56FE8F" fill="#56FE8F" width={40} height={40} />
      ) : (
        notifications.map((info, index) => (
          <PaymentRecord
            key={index}
            title="Fund"
            amount={info.amount}
            paymentId={info.code}
            wallet="USDT"
            // walletAddress="dfdkfueijlkdjoefo434534"
            date={formatDayMonthYear(new Date(info.timeStamp.seconds * 1000))}
            time={formatAMPM(new Date(info.timeStamp.seconds * 1000))}
            status={info?.status}
          />
        ))
      )}
    </Container>
  );
};

export default FundRecords;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: ${({ $loading }) => ($loading ? "center" : "")};
  gap: 14px;
`;
