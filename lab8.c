int
dtls1_process_heartbeat(SSL *s)
  {
  unsigned char *p = &s->s3->rrec.data[0], *pl;
  unsigned short hbtype;
  unsigned int payload;

  // ... Some details omitted here
  if (19 > s->s3->rrec.length)
    return 0;


  hbtype = *p++;
  n2s(p, payload);
  if (19 + payload> s->s3->rrec.length)
    return 0;

