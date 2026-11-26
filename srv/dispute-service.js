import cds from '@sap/cds';
const LOG = cds.log('s4-mock');

export default class ZFI_DISPUTE_SRV extends cds.ApplicationService {
  async init() {
    const { Disputes } = this.entities;
    const { OpenItems } = cds.entities('s4');

    // BEFORE saving: fill in what "S/4" generates itself
    this.before('CREATE', Disputes, req => {
      if (!req.data.CaseNo) {
        req.data.CaseNo = 'DSP' + String(Date.now()).slice(-7);
      }
      req.data.CreatedAt = new Date().toISOString();
    });

    // AFTER saving: put the invoice on hold
    this.after('CREATE', Disputes, async (_, req) => {
      const d = req.data;
      const level = d.Type === 'PROMISE' ? 'P' : 'D';
      const rows = await UPDATE(OpenItems)
        .set({ Level: level })
        .where({ InvoiceNo: d.InvoiceNo, CompanyCode: d.CompanyCode });
      LOG.info(`Case ${d.CaseNo}: invoice ${d.InvoiceNo} set to level ${level} (${rows} row updated)`);
    });

    return super.init();
  }
}