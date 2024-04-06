import { Box, Button } from "@mui/material";
import React from "react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import styles from "./styles";

const Gallery = () => {
  return (
    <Box className="container" component="section" sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/5647/5945/dae6c6937522fe7b2f8211bb71315d78?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkKfnMzNAqbD1PnFKLdh4RFXrYkOropD0dAHkWDThvwBuI1lE10Vow5K2GmyduICFz7qHFapfH~3XEGm9bQPcL~Y3S8o00WY7yCTzs9XdIwyDWjjf88AcGyk2HsnxKlMby2Hl8LNBtj7oeO2oPChCpzYOeCd0xfYQYVCw8nckz41rtdWIvL8WTPrr~2oO6GlJeN1ONwC-QdNq7lbPpsfGMgGjv4hIzL-YwhpenwH6zL5HiDbCcEqAhV0DQ--MGGVg3zgsA9X7OR3I1s9NGxv1WvXf8qF9nAz3~DnZeHasbPEaGrLI37VVnHECLt7qewp707spNDvRmZmCfM5HIvKfA__"
        />
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/2dd1/b2bd/b414e9b2d62998bd245bb8b8ecb0cdb1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EETkvsUANywMWpfbGAan5ICbl6NOCfLlDBaz3~f9afGG9YaAUU~g26wVeJAdnmFxBYLk1PM6TLY-5nMTnfYorkj6MywqDP5gqsLkbeNxjPZCKKyS4MiUk9jx7lw0KA3xUmeGVVfybho3faktJ~ESImXxBh6JMlhf5swvh6vPpijVHT70SiAjZY0VIacccvYzsop5eGl140-MafNX-xhYYn7lA7XhYCGYjuQytbAaQ7JA97g6wCGo~ogOBYN2zk1Nm4vtyA5CjVSa4HmajqbGo9dN-u1SJF5qGgpuByRcv0fkL4SYFbmfapR21q7-nwMva~ILQVRDHd9S2vG9QU2J8Q__"
        />
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/d047/3089/9ae9e47497a0f7ff4071619cd624b8c0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZnsSjsP2KD3Rpbos-o4zMhHLVhQ6hkXdDH8oYhfNeGscQC1aPljhOoK5UXfh369sUlkQ12j0JKlSLDaBPEHI4c25bJLEmx5vT8fSyFuGOF9zuYjSZiPgJi5lmX632qfX6HBtfKACed5BnkZIwzkxJbhvt0r2GHd5r0yJLFuV7~kdbgObVMiMp01mVCHuaEgOBUHA84DasV2lLWZn52KFWNzR~9aIzvpLdiN2kJjcC9aA2TZIZjlPmh6VdXIwvhjq5tTDG0zrGw1duD0JtonlAzAUtMVRmwofdSPaXBp3OnyiKWIDVX12RmCb5VvTVEFy3G0GrJ5U-i079qRJMhFoEQ__"
        />
      </Box>
      <Box sx={styles.wrapper}>
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/b98c/a279/4db2241e1d0c2fad28cf8a7190dbb0ab?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ck8HcaKJ-HO1oi-G8yzohITn96-Bpeff4frPL1X8DBdgp4p~OTSCT-hCzztGsR1nAxX4W5jh3HuAVIvchreu2YSI-zzWgfmJRLUtf3a~GaOlOT6yXkKNhmM4LEjoe~AfZtENijrYtPMEht-nNATW1YZdtgNXwX5y5uIBuZm~g8QB3-GkVLsKGsflSnzyFiWXoE5G-qYzyjif5ViW-45BPLt79UYg6hB5vNF9BaQ~AtsbeocSgs9tpsb4sMui96jG5WADg~N52YTE74wp2d9tPM8LE2U10syZQTrQpzE1uJa2sy-bPuAGDFqTNpEUUpMN6UUzMMWXqwPxFkqJxhntzw__"
        />
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/2078/e8c7/81d06751a7825f4608c4995e4f5ebf31?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gQ75~w2gmJz-c0ExhGqxtqeD8OE7uG-jtOgT5VG993SVkFdWZuyeyfWy6fstSSGtc25OvtoCBay0UV9Ka3MdrxAKSgh0cWLZmku6MxW-qJ0In9OFYNEr8QAxLSi8aclQ~b66yKUOdvSdaHYTjx3CriMTxNIa8lmZ4ZH7rOCvsyKdIwjOFTDqBAFMApAj~nJbgvulvm9cojs3o8FBKOzExauUIxYj0KbrGMNK-aBtgeZVplCZARRVVssDoQnyKX3iUuQ-f2LAXLbdl-niyjWFvPw2YUwET-P-vDM-u~vENEjwKni5~T-nj04jTOQ9gP~UMzEODEARVKoMliBPNbU6vA__"
        />
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/a918/9b66/e0818f1e2357c3e066d0cc55d263e612?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ge0UJ7J7-jGCq7gfHbqoX8u2WzqQy-CBk6x21sf0Aep1PZYFf3uQO9Ti-ohvoWB3MzRPyFqbm54bXaJGydKMajUrdIwki9D5g3gi3v9yHsAzddplC196-rMbtHT3PZyymSgya7mSDvAJA1NKVOaIbbOp6PE4cOvH6L6UtR19bmBqY6Aqr-BTTEKZg6NtAOHIfOmZyIPyLmBcG4Z28-pTGluJFLR-CGENuN8cfhS-cjm2EFTRtmo7OqBTyGsnSG9HJhSv3unk~FraXtzCvxzSTSBgCn6JYHdmuHSrid5sFgX0BZHUwD-VKJSTz2GOzlVbfZCEZz2t7nrFsHYVTMzNgA__"
        />
      </Box>
      <Button endIcon={<ArrowOutwardOutlinedIcon />} sx={styles.button}>
        See More
      </Button>
    </Box>
  );
};

export default Gallery;
