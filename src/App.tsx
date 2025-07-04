import { Typography } from "@alfalab/core-components/typography";

import hero from "./assets/hero.png";
import arrow from "./assets/arrow.jpg";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import React, { useState } from "react";
import { Tab, Tabs } from "@alfalab/core-components/tabs";
import { SelectedId } from "@alfalab/core-components/tabs/typings";
import { sendDataToGA } from "./utils/events.ts";

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [refill, setRefill] = useState<SelectedId>("Сразу на год");

  const handleRefill = (
    _: React.MouseEvent,
    { selectedId }: { selectedId: SelectedId },
  ) => {
    setRefill(selectedId);
  };

  const submit = () => {
    sendDataToGA({
      is_alfa_smart: 0,
      is_info_alfa_smart: 0,
      payment_type: refill,
      final_sum: refill === "Сразу на год" ? "4 000 ₽" : "400 ₽",
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={hero}
          style={{ borderRadius: "1rem" }}
          alt="Картинка Альфа-Смарт"
        />

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="medium"
          >
            Защита жизни и здоровья
          </Typography.TitleResponsive>
          <Typography.Text
            view="primary-medium"
            tag="p"
            className={appSt.productText}
          >
            Страхование от несчастных случаев в любой точке мира
          </Typography.Text>

          <Gap size={2} />

          <Typography.Text
            view="primary-large"
            tag="p"
            weight="bold"
            className={appSt.productText}
          >
            Условия
          </Typography.Text>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "1rem",
            }}
          >
            <div
              className={appSt.product}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Внутрення отделка
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 200 000 ₽
              </Typography.Text>
            </div>
            <div className={appSt.product}>
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Внутрення отделка
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 200 000 ₽
              </Typography.Text>
            </div>
            <div className={appSt.product}>
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Ответственность перед соседями
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 200 000 ₽
              </Typography.Text>
            </div>
            <div className={appSt.product}>
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Движимое имущество
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 150 000 ₽
              </Typography.Text>
            </div>
            <div className={appSt.product}>
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Расходы на гостиницу
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 10 000 ₽
              </Typography.Text>
            </div>
            <div
              className={appSt.product}
              style={{
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Расходы на уборку после страхового случая
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 5 000 ₽
              </Typography.Text>
            </div>
          </div>
        </div>

        <Gap size={32} />

        <Typography.Text
          view="primary-large"
          tag="p"
          weight="bold"
          className={appSt.productText}
        >
          Как оплачивать
        </Typography.Text>

        <Gap size={16} />

        <Tabs view="secondary" selectedId={refill} onChange={handleRefill}>
          <Tab key="1" id="Сразу на год" title="Сразу на год" />
          <Tab key="2" id="Каждый месяц" title="Каждый месяц" />
        </Tabs>

        <Gap size={24} />

        <div
          onClick={submit}
          style={{
            backgroundColor: "#212124",
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography.Text
              view="primary-large"
              tag="p"
              weight="bold"
              style={{ color: "white" }}
              className={appSt.productText}
            >
              {refill === "Сразу на год" ? "4 000" : "400"} ₽ за{" "}
              {refill === "Сразу на год" ? "год" : "месяц"}
            </Typography.Text>
            <Gap size={4} />
            <Typography.Text
              view="primary-small"
              tag="p"
              style={{ color: "gray" }}
              className={appSt.productText}
            >
              Выплаты до 565 000 ₽
            </Typography.Text>
          </div>
          <img src={arrow} alt="" height={65} />
        </div>
      </div>
    </>
  );
};
