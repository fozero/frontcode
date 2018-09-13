


----



select 
a.city
,a.stat_day
,a.type
,a.xiadan
,b.xinzhuce
,c.xindanxinyonghu
FROM 
(SELECT
city,from_unixtime(create_time, 'yyyy-MM-dd') AS stat_day,
CASE 
   WHEN from_unixtime(create_time, 'HH') >= '23' THEN 'night'
   ELSE 'morning'
   END AS type,
   user_id,
count(user_id) as xiadan
FROM yc_bit.ods_service_order a
WHERE ((from_unixtime(create_time, 'HH') >= '23'
    OR from_unixtime(create_time, 'HH') < '05')
    AND create_time >= UNIX_TIMESTAMP('2018-09-08', 'yyyy-MM-dd')
    AND create_time < UNIX_TIMESTAMP('2018-09-14', 'yyyy-MM-dd'))
    and city='hf'
    group by user_id,city,from_unixtime(create_time, 'yyyy-MM-dd') ,CASE 
    WHEN from_unixtime(create_time, 'HH') >= '23' THEN 'night'
    ELSE 'morning' END ) a
left join( 
 select
 order_city,from_unixtime(active_time,'yyyy-MM-dd') as jihuoshijian,
 count(user_id)as xindanxinyonghu,
 user_id
 from 
 yc_bit.user_jihuo_order_new 
    where active_time is not null or 
 active_time >= unix_timestamp('2019-09-08','yyyy-MM-dd')
    and active_time < unix_timestamp('2018-09-14','yyyy-MM-dd')
 group by user_id,order_city,from_unixtime(active_time,'yyyy-MM-dd'))c 
 on a.city=c.order_city and a.user_id=c.user_id
 left join(
   select city,
   count(distinct user_id) as xinzhuce,
   from_unixtime(create_time,'yyyy-MM-dd') zheceshiian
   from yc_ods.fu_user
   where
   from_unixtime(create_time, 'HH') >= '23'
    OR from_unixtime(create_time, 'HH') < '05'
 and create_time >= UNIX_TIMESTAMP('2018-09-08', 'yyyy-MM-dd')
    AND create_time < UNIX_TIMESTAMP('2018-09-14', 'yyyy-MM-dd')
 and  city='hf'
    group by city,from_unixtime(create_time,'yyyy-MM-dd')) b
    on a.stat_day=b.zheceshiian and a.city=b.city;