from pathlib import Path
from lxml import html
import unittest, json, hashlib
ROOT=Path(__file__).resolve().parents[1]
class OctoberRefresh(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.text=(ROOT/'index.html').read_text(); cls.doc=html.fromstring(cls.text)
 def test_rim_lab_affiliation_and_people(self):
  for url in ['https://rimlab.tech/','https://rimlab.tech/people']:
   self.assertTrue(self.doc.xpath('//a[@href=$u]',u=url))
 def test_active_branches_have_deep_link_targets(self):
  for id in ['mission-planning','information-foundations','collective-identifiability','lonely-observer','behavior-inference']:
   self.assertEqual(len(self.doc.xpath('//*[@data-topic-panel=$i]',i=id)),1)
   self.assertTrue(self.doc.xpath('//*[@href=$h]',h='#/research/'+id))
 def test_every_internal_route_has_a_real_target(self):
  topics={x.get('data-topic-panel') for x in self.doc.xpath('//*[@data-topic-panel]')}|{'evolution'}
  papers={x.get('data-publication-panel') for x in self.doc.xpath('//*[@data-publication-panel]')}
  past={x.get('data-past-panel') for x in self.doc.xpath('//*[@data-past-panel]')}
  for a in self.doc.xpath('//a[starts-with(@href,"#/")]'):
   parts=a.get('href')[2:].split('/')
   if len(parts)>1:self.assertIn(parts[1],{'research':topics,'publications':papers,'past':past}[parts[0]])
 def test_submitted_papers_are_separate_from_acceptances(self):
  for id in ['aamas-2027','iscs-2027']:
   card=self.doc.xpath('//*[@data-paper-id=$i]',i=id)
   self.assertEqual(len(card),1);self.assertEqual(card[0].get('data-paper-status'),'submitted')
   self.assertTrue(self.doc.xpath('//*[@data-publication-panel=$i]',i=id))
  self.assertNotIn('Blue Sky',self.text)
 def test_assets_ids_and_links(self):
  ids=self.doc.xpath('//@id');self.assertEqual(len(ids),len(set(ids)))
  for el in self.doc.xpath('//*[@src] | //a[@href]'):
   v=el.get('src') or el.get('href')
   if v and not v.startswith(('http:','https:','mailto:','#','data:')):self.assertTrue((ROOT/v).exists(),v)
  for a in self.doc.xpath('//a[@target="_blank"]'):self.assertIn('noopener',a.get('rel',''))
 def test_publication_filter_and_accessibility(self):
  self.assertTrue(self.doc.xpath('//*[@id="zw-paper-search"]'))
  self.assertTrue(self.doc.xpath('//*[@data-paper-filter="submitted"]'))
  self.assertTrue(self.doc.xpath('//a[@href="#zw-main-content"]'))
 def test_topic_extensions_are_sections_of_the_topic(self):
  for topic in ["autonomy","swarm","football","economics"]:
   panel=self.doc.xpath("//*[@data-topic-panel=$t]",t=topic)[0]
   self.assertTrue(panel.xpath("./section[h2='Recent extensions']"),topic)
  for topic in ["football","economics"]:
   panel=self.doc.xpath("//*[@data-topic-panel=$t]",t=topic)[0]
   self.assertTrue(panel.xpath("./section[h2='Related papers']"),topic)
 def test_original_archive_is_unchanged(self):
  hashes=json.loads((ROOT/'tests/archive-sha256.json').read_text())
  for name,digest in hashes.items():
   self.assertEqual(hashlib.sha256((ROOT/name).read_bytes()).hexdigest(),digest)
if __name__=='__main__':unittest.main()
