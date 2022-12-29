import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Puff from "react-loading-icons/dist/esm/components/puff";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PaymentRecord } from "../../components/cards/PaymentRecordCard";
import Empty from "../../components/texts/Empty";
import { getIncomeNotificationFromDb } from "../../utils/dbCalls";
import {
  formatAMPM,
  formatDayMonthYear,
  getDaysToBeCredited,
  handleError,
  tryCatch,
} from "../../utils/globalFunctions";

const AccountRecords = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

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
      let notifications = await getIncomeNotificationFromDb(userInfo.email);
      setNotifications(notifications);
      setLoading(false);
    } catch (e) {
      handleError(e);
      setLoading(false);
    }
  };

  return (
    <Container $loading={loading}>
      {!loading && notifications.length === 0 && (
        <Empty text="There are currently no notification" />
      )}
      {loading ? (
        <Puff stroke="#56FE8F" fill="#56FE8F" width={40} height={40} />
      ) : (
        notifications?.map((info, index) => (
          <PaymentRecord
            key={index}
            title="Daily Earning"
            share={info.title}
            amount={info.amount}
            wallet="USDT"
            walletAddress="dfdkfueijlkdjoefo434534"
            // date={new Date(info.time).getTime()}
            date={formatDayMonthYear(new Date(info.time.seconds * 1000))}
            time={formatAMPM(new Date(info.time.seconds * 1000))}
            $success
          />
        ))
      )}
    </Container>
  );
};

export default AccountRecords;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: ${({ $loading }) => $loading && "center"};
  gap: 14px;
`;
