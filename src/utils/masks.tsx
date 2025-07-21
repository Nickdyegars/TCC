export function maskPhone(value: string) {
  if (!value) return '';
  
  const cleaned = value.replace(/\D/g, '').slice(0, 11); // Remove tudo que não for dígito

  if (cleaned.length <= 10) {
    // Telefone fixo
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim().replace(/[-]$/, '');
  } else {
    // Celular
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim().replace(/[-]$/, '');
  }
}